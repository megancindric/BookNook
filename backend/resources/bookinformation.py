from flask import request
from flask_jwt_extended import jwt_required, get_jwt_identity, verify_jwt_in_request
from flask_restful import Resource
from database.models import db, Review, Favorite
from database.schemas import review_schema, reviews_schema

class GetBookInformation(Resource):
    def get(self):
        pass
        custom_response = {}
    # All reviews from DB related to query param book ID
    # Average rating
    # Bool representing favorite matching book
    # 200 status code