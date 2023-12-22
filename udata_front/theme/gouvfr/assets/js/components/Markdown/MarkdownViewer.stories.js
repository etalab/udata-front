import MarkdownViewer from './MarkdownViewer.vue';

export default {
  title: 'Components/MarkdownViewer',
  component: MarkdownViewer,
};

const args = {
  content: `# h1 Heading 8-)
  ## h2 Heading
  ### h3 Heading
  #### h4 Heading
  ##### h5 Heading
  ###### h6 Heading
  ## Horizontal Rules
  ___
  ---
  ***
  ## Typographic replacements
  Enable typographer option to see result.
  (c) (C) (r) (R) (tm) (TM) (p) (P) +-
  test.. test... test..... test?..... test!....
  !!!!!! ???? ,,  -- ---
  "Smartypants, double quotes" and 'single quotes'`,
};

export const MarkdownViewerWithContent = {
  render: (args) => ({
    components: { MarkdownViewer },
    setup() {
      return { args };
    },
    template: '<MarkdownViewer v-bind="args"/>',
  }),
  args,
};