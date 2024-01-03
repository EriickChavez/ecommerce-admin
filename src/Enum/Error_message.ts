export enum ERROR_MESSAGE {
  INTERNAL_SERVER_ERROR = 'Internal Server Error',
  NOT_FOUND = 'Not Found',
  PASSWORD_INCORRECT = 'Password Incorrect',
  USER_ALREADY_EXISTS = 'User Already Exists',
  USER_NOT_FOUND = 'User Not Found',

  PASSWORD_FORMAT = 'Password does not meet the requirements',
  EMAIL_FORMAT = 'Email does not meet the requirements',

  UNKNOWN_ERROR = 'Unknown Error',

  BANNER_NOT_FOUND = 'Banner Not Found',
  BANNER_ALREADY_EXISTS = 'Banner Already Exists',
  BANNER_NOT_PUBLISHED = 'Banner Not Published',
  BANNER_INTERNAL_ERROR = 'Banner Internal Error',

  CATEGORY_ALREADY_EXISTS = 'Category Already Exists',
  CATEGORY_NOT_PUBLISHED = 'Category Not Published',

  SELLER_ALREADY_EXISTS = 'Seller Already Exists',
  SELLER_NOT_PUBLISHED = 'Seller Not Published',

  PRODUCT_ALREADY_EXISTS = 'Product Already Exists',
  PRODUCT_NOT_PUBLISHED = 'Product Not Published',
}

export enum ERROR_CODE {
  INTERNAL_SERVER_ERROR = 0,
  NOT_FOUND = 1,
  PASSWORD_INCORRECT = 2,
  USER_ALREADY_EXISTS = 3,
  USER_NOT_FOUND = 4,

  PASSWORD_FORMAT = 5,
  EMAIL_FORMAT = 6,

  UNKNOWN_ERROR = 7,

  BANNER_NOT_FOUND = 8,
  BANNER_ALREADY_EXISTS = 9,
  BANNER_NOT_PUBLISHED = 10,
  BANNER_INTERNAL_ERROR = 11,

  CATEGORY_ALREADY_EXISTS = 12,
  CATEGORY_NOT_PUBLISHED = 13,

  SELLER_ALREADY_EXISTS = 14,
  SELLER_NOT_PUBLISHED = 15,

  PRODUCT_ALREADY_EXISTS = 16,
  PRODUCT_NOT_PUBLISHED = 17,

  COVER_UPLOAD_ERROR = 18,
  ALBUM_UPLOAD_ERROR = 19,
}
