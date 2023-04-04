from flask import request
from flask_jwt_extended import jwt_required, get_jwt_identity, verify_jwt_in_request
from flask_restful import Resource
from database.models import db, Review, Favorite
from database.schemas import review_schema, reviews_schema

class GetBookInformation(Resource):
    @jwt_required()
    def get(self):
        custom_response = {}
        user_id = get_jwt_identity()
        book_id = request.args.get("book_id")
        book_reviews = Review.query.filter_by(book_id=book_id)
        custom_response["reviews"] = reviews_schema.dump(book_reviews)
        avg_review = sum(review.rating for review in book_reviews) / len(custom_response["reviews"])
        custom_response["avg_review"] = avg_review
        if user_id:
            matching_favorite = Favorite.query.filter_by(user_id=user_id, book_id = book_id).first()
            if matching_favorite:
                custom_response["is_favorite"] = True
        else: 
            custom_response["is_favorite"] = False
        return custom_response, 200
    # All reviews from DB related to query param book ID
    # Average rating
    # Bool representing favorite matching book
    # 200 status code