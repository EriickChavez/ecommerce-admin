enum SCREEN_NAME {
  INVENTORY_STACK = 'InventoryStack',
  NEW_PRODUCT_STACK = 'NewProductStack',
  HOME_SCREEN = 'HomeScreen',
  ADD_PRODUCT_SCREEN = 'AddProductScreen',
  ADD_PRODUCT_SCREEN_PT2 = 'AddProductScreen2',
  CONFIRM_DETAILS_SCREEN = 'ConfirmDetailsScreen',
  CONFIRMATION_SCREEN = 'ConfirmScreen',
  ICON_HELP_SCREEN = 'IconHelpScreen',

  AUTH_STACK = 'LoginScreen',
  LOGIN_SCREEN = 'LoginScreen',
  SIGNUP_SCREEN = 'SignupScreen',

  SETTINGS_STACK = 'SettingsStack',
  SETTINGS_SCREEN = 'SettingsScreen',
  NEW_CATEGORY_SCREEN = 'addCategoryScreen',
  NEW_BANNER_SCREEN = 'addBannerScreen',
}
enum SCREEN_NAME_TITLE {
  INVENTORY_STACK = 'Inventory',
  NEW_PRODUCT_STACK = 'New Product',
  HOME_SCREEN = 'Home',
  ADD_PRODUCT_SCREEN = 'Add Product',
  ADD_PRODUCT_SCREEN_PT2 = 'Add Product',
  CONFIRM_DETAILS_SCREEN = 'Confirm Details',
  CONFIRMATION_SCREEN = 'Confirm Screen',
  AUTH_STACK = 'Auth',
  LOGIN_SCREEN = 'Login',
  SIGNUP_SCREEN = 'Signup',
  SETTINGS_STACK = 'Settings',
  SETTINGS_SCREEN = 'Settings',
  NEW_CATEGORY_SCREEN = 'Add Category',
  ICON_HELP_SCREEN = 'Help',
  NEW_BANNER_SCREEN = 'Add Banner',
}
const ALL_SCREENS = [
  SCREEN_NAME_TITLE.NEW_PRODUCT_STACK,
  SCREEN_NAME_TITLE.INVENTORY_STACK,
  SCREEN_NAME_TITLE.HOME_SCREEN,
  SCREEN_NAME_TITLE.ADD_PRODUCT_SCREEN,
  SCREEN_NAME_TITLE.ADD_PRODUCT_SCREEN,

  SCREEN_NAME_TITLE.CONFIRM_DETAILS_SCREEN,
  SCREEN_NAME_TITLE.CONFIRMATION_SCREEN,
  // AUTH STACK
  SCREEN_NAME_TITLE.LOGIN_SCREEN,
  SCREEN_NAME_TITLE.SIGNUP_SCREEN,
  // SETTINGS STACK
  SCREEN_NAME_TITLE.SETTINGS_STACK,
  SCREEN_NAME_TITLE.SETTINGS_SCREEN,
  SCREEN_NAME_TITLE.NEW_CATEGORY_SCREEN,
  SCREEN_NAME_TITLE.ICON_HELP_SCREEN,
  SCREEN_NAME_TITLE.NEW_BANNER_SCREEN,
];
const getScreenTitles = (title: SCREEN_NAME): string => {
  const SCREENS = {
    [SCREEN_NAME.NEW_PRODUCT_STACK]: SCREEN_NAME_TITLE.NEW_PRODUCT_STACK,
    [SCREEN_NAME.INVENTORY_STACK]: SCREEN_NAME_TITLE.INVENTORY_STACK,
    [SCREEN_NAME.HOME_SCREEN]: SCREEN_NAME_TITLE.HOME_SCREEN,
    [SCREEN_NAME.ADD_PRODUCT_SCREEN]: SCREEN_NAME_TITLE.ADD_PRODUCT_SCREEN,
    [SCREEN_NAME.ADD_PRODUCT_SCREEN_PT2]: SCREEN_NAME_TITLE.ADD_PRODUCT_SCREEN,
    [SCREEN_NAME.CONFIRM_DETAILS_SCREEN]:
      SCREEN_NAME_TITLE.CONFIRM_DETAILS_SCREEN,
    [SCREEN_NAME.CONFIRMATION_SCREEN]: SCREEN_NAME_TITLE.CONFIRMATION_SCREEN,
    // AUTH STACK
    [SCREEN_NAME.LOGIN_SCREEN]: SCREEN_NAME_TITLE.LOGIN_SCREEN,
    [SCREEN_NAME.SIGNUP_SCREEN]: SCREEN_NAME_TITLE.SIGNUP_SCREEN,
    // SETTINGS STACK
    [SCREEN_NAME.SETTINGS_STACK]: SCREEN_NAME_TITLE.SETTINGS_STACK,
    [SCREEN_NAME.SETTINGS_SCREEN]: SCREEN_NAME_TITLE.SETTINGS_SCREEN,
    [SCREEN_NAME.NEW_CATEGORY_SCREEN]: SCREEN_NAME_TITLE.NEW_CATEGORY_SCREEN,
    [SCREEN_NAME.ICON_HELP_SCREEN]: SCREEN_NAME_TITLE.ICON_HELP_SCREEN,
    [SCREEN_NAME.NEW_BANNER_SCREEN]: SCREEN_NAME_TITLE.NEW_BANNER_SCREEN,
  };
  return SCREENS[title];
};

export {SCREEN_NAME, SCREEN_NAME_TITLE, getScreenTitles, ALL_SCREENS};
