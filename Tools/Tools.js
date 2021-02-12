export const isFavoriteIcon = (isFavorite = true) => {
    return isFavorite ? require( '../assets/images/ic_favorite.png' ) : require( '../assets/images/ic_no_favorite.png' );
}