from flask import request
from flask_jwt_extended import jwt_required, get_jwt_identity, verify_jwt_in_request
from flask_restful import Resource
from database.models import db, Favorite
from database.schemas import favorite_schema, favorites_schema


class UserFavoriteResource(Resource):
    @jwt_required()
    def get(self):
        user_id = get_jwt_identity()
        user_favorites = Favorite.query.filter_by(user_id=user_id)
        return favorites_schema.dump(user_favorites), 200
    
    @jwt_required()
    def post(self):
        user_id = get_jwt_identity()
        form_data = request.get_json()
        new_favorite = favorite_schema.load(form_data)
        new_favorite.user_id = user_id
        db.session.add(new_favorite)
        db.session.commit()
        return favorite_schema.dump(new_favorite), 201
    
class UserFavoriteDetail(Resource):
    @jwt_required()
    def delete(self, favorite_id):
        favorite = Favorite.query.get_or_404(favorite_id)
        db.session.delete(favorite)
        db.session.commit()
        return '', 204
