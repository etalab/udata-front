import RangePicker from './RangePicker.vue';

export default {
  title: 'Components/RangePicker',
  component: RangePicker,
};

const args = {
  value: null,
  onChange(value) { console.log(value) }
};

export const SimpleRangePicker = {
  render: (args) => ({
    components: { RangePicker },
    setup() {
      return { args };
    },
    template: `
    <RangePicker v-bind="args"/>`,
  }),
  args,
};
