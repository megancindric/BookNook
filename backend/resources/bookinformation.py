from flask import request
from flask_jwt_extended import jwt_required, get_jwt_identity, verify_jwt_in_request
from flask_restful import Resource
from database.models import db, Review, Favorite
from database.schemas import review_schema, reviews_schema

class GetBookInformation(Resource):
    def get(self):
        custom_response = {}
        book_id = request.args.get("book_id")
        book_reviews = Review.query.filter_by(book_id=book_id)
        book_reviews = reviews_schema.dump(book_reviews)
        if len(book_reviews) > 0:
            custom_response["avg_review"] = sum(review.rating for review in book_reviews) / len(book_reviews)
        else:
            custom_response["avg_review"] = 0

        try:
            verify_jwt_in_request()
            user_id = get_jwt_identity()
            matching_favorite = Favorite.query.filter_by(user_id=user_id, book_id = book_id).first()
            if matching_favorite:
                custom_response["is_favorite"] = True
            else: 
                custom_response["is_favorite"] = False
        except:
            pass
        return custom_response, 200
    # All reviews from DB related to query param book ID
    # Average rating
    # Bool representing favorite matching book
    # 200 status code