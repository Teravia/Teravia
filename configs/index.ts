// configs/index.ts

import hunian from "./hunian";


const propertyConfigs = {
  categories: [
    hunian,
  ],

  getCategory(categoryId: string) {
    return this.categories.find(
      (category) => category.id === categoryId
    );
  },

  getPropertyType(categoryId: string, propertyTypeId: string) {
    const category = this.getCategory(categoryId);

    if (!category) return null;

    return category.propertyTypes.find(
      (property) => property.id === propertyTypeId
    );
  },

  getSections(categoryId: string, propertyTypeId: string) {
    const property = this.getPropertyType(
      categoryId,
      propertyTypeId
    );

    if (!property) return [];

    return property.sections;
  },
};

export default propertyConfigs;
