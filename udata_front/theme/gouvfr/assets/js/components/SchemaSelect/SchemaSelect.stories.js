import SchemaSelect from './SchemaSelect.vue';

export default {
  title: 'Components/SchemaSelect',
  component: SchemaSelect,
};

const args = {
  values: ""
};

export const SimpleSchemaSelect = {
  render: (args) => ({
    components: { SchemaSelect },
    setup() {
      return { args };
    },
    template: '<SchemaSelect v-bind="args" />',
  }),
  args,
};

export const SchemaSelectWithoutAllOption = {
  render: (args) => ({
    components: { SchemaSelect },
    setup() {
      return { args };
    },
    template: '<SchemaSelect v-bind="args" />',
  }),
  args: {
    ...args,
    showAllOption: false,
  },
};
