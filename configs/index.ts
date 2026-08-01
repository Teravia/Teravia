// configs/index.ts

import hunian from "./hunian";
import komersial from "./komersial";
import industri from "./industri";
import tanah from "./tanah";

const propertyConfigs = {
  categories: [
    hunian,
    komersial,
    industri,
    tanah,
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
