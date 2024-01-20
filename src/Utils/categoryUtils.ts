import {Category} from '../Domain/Entity';

const getCategoriesByIds = (ids: string[], Categories: Category[] = []) => {
  if (!Array.isArray(ids)) {
    return [];
  }

  const newCategories: Category[] = [];
  ids.forEach(id => {
    const categoryIndex = Categories.findIndex(cty => cty.id === id);

    if (categoryIndex !== -1) {
      newCategories.push(Categories[categoryIndex]);
    }
  });
  return newCategories;
};

export {getCategoriesByIds};
