import { MdStore as icon } from 'react-icons/md';

export default {
  name: 'storeSettings',
  title: 'Settings',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Store Name',
      type: 'string',
      description: 'Name of store',
    },
    {
      name: 'slicemaster',
      title: 'Slicemaster currently slicing',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'person' }] }],
      description: 'Store settings',
    },
    {
      name: 'hotSlices',
      title: 'Hot Slices available in the case',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'pizza' }] }],
    },
    // {
    //   name: 'image',
    //   title: 'image',
    //   type: 'image',
    //   options: {
    //     hotspot: true,
    //   },
    // },
    // {
    //   name: 'price',
    //   title: 'price',
    //   type: 'number',
    //   description: 'Price of the pizza in cents',
    //   validation: (Rule) => Rule.min(1000).max(50000),
    //   inputComponent: PriceInput,
    // },
    // {
    //   name: 'toppings',
    //   title: 'Toppings',
    //   type: 'array',
    //   of: [{ type: 'reference', to: [{ type: 'topping' }] }],
    // },
  ],
  // preview: {
  //   select: {
  //     title: 'name',
  //     media: 'image',
  //     topping0: 'toppings.0.name',
  //     topping1: 'toppings.1.name',
  //     topping2: 'toppings.2.name',
  //     topping3: 'toppings.3.name',
  //   },
  //   prepare: ({ title, media, ...toppings }) => {
  //     //   console.log({ title, media, toppings });
  //     const tops = Object.values(toppings).filter(Boolean);
  //     return {
  //       title,
  //       media,
  //       subtitle: tops.join(', '),
  //     };
  //   },
  // },
};
