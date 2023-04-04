from flask import request
from flask_jwt_extended import jwt_required, get_jwt_identity, verify_jwt_in_request
from flask_restful import Resource
from database.models import db, Review
from database.schemas import review_schema, reviews_schema

class UserReviewResource(Resource):
    @jwt_required()
    def get(self):
        user_id = get_jwt_identity()
        user_reviews = Review.query.filter_by(user_id=user_id)
        return reviews_schema.dump(user_reviews),200
    @jwt_required()
    def post(self):
        user_id = get_jwt_identity()
        form_data = request.get_json()
        new_review = review_schema.load(form_data)
        new_review.user_id = user_id
        db.session.add(new_review)
        db.session.commit()
        return review_schema.dump(new_review), 201
    
class ReviewDetailResource(Resource):
    @jwt_required()
    def put(self, review_id):
        user_id = get_jwt_identity()
        review = Review.query.get_or_404(review_id)
        if 'text' in request.json:
            review.text = request.json["text"]
        if 'rating' in request.json:
            review.rating = request.json["rating"]
        if 'book_id' in request.json:
            review.book_id = request.json["book_id"]
        db.session.commit()
        return review_schema.dump(review)

    @jwt_required()
    def delete(self, review_id):
        user_id = get_jwt_identity()
        review = Review.query.get_or_404(review_id)
        db.session.delete(review)
        db.session.commit()
        return '', 204
