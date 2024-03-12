import Step3CompleteThePublication from './Step3CompleteThePublication.vue';
import * as Stepper from '../../components/Form/Stepper/StepperReuse.stories';


export default {
  title: 'Pages/ReusePublishingForm/Step3',
  component: Step3CompleteThePublication,
};

const originalReuse = {
  badges: [],
  created_at: "2024-03-03T19:04:43.599000+00:00",
  datasets: [],
  deleted: null,
  description: "This is a random description",
  extras: {},
  featured: null,
  id: "someId",
  image: "https://picsum.photos/200",
  image_thumbnail: "https://picsum.photos/200",
  last_modified: "2024-03-04T08:07:50.215000+00:00",
  metrics: {
    datasets: 1,
    discussions: 0,
    followers: 0,
    views: 0
  },
  organization: null,
  owner: {
    avatar: "https://static.data.gouv.fr/avatars/27/62003f06b04fa996d1e3ae84adbaf9-original.png",
    avatar_thumbnail: "https://static.data.gouv.fr/avatars/27/62003f06b04fa996d1e3ae84adbaf9-500.png",
    class: "User",
    first_name: "Benoit",
    id: "5bdb10308b4c4108ae679f01",
    last_name: "Demaegdt",
    page: "https://www.data.gouv.fr/fr/users/benoit-demaegdt/",
    slug: "benoit-demaegdt",
    uri: "https://www.data.gouv.fr/api/1/users/benoit-demaegdt/"
  },
  page: "",
  private: false,
  slug: "testReuse",
  tags: [
    "mobilite",
    "mobilite-douce",
    "velo"
  ],
  title: "Test Reuse",
  topic: "transport_and_mobility",
  type: "vizualization",
  uri: "",
  url: "data.gouv.fr"
};

const args = {
  originalReuse,
  feedbackUrl: "https://demo.data.gouv.fr/fr/datasets/?q=feedback",
  steps: Stepper.StepperOnFirstStep.args.steps,
  redirectDraftUrl: "https://demo.data.gouv.fr/fr/datasets/?q=draft",
};

export const Step3 = {
  render: (args) => ({
    components: { Step3CompleteThePublication },
    setup() {
      return { args };
    },
    template: ` <div class="bg-grey-50 fr-p-4w">
                  <Step3CompleteThePublication v-bind="args" />
                </div>`,
  }),
  args,
};