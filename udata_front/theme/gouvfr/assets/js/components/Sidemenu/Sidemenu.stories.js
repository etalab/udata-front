import Sidemenu from './Sidemenu.vue';

export default {
  title: 'Components/Sidemenu',
  component: Sidemenu,
};

const args = {
  buttonText: "View help",
  onRight: false,
};

export const SidemenuOnLeft = {
  render: (args) => ({
    components: { Sidemenu },
    setup() {
      return { args };
    },
    template: ` <div class="fr-grid-row">
                  <Sidemenu class="fr-col-12 fr-col-md-5" v-bind="args">
                    <template v-slot:title>
                      <span class="fr-icon--sm fr-icon-question-line" aria-hidden="true"></span>
                      Help
                    </template>
                    <ul class="fr-sidemenu__list">
                      <li class="fr-sidemenu__item fr-sidemenu__item--active">
                        <a
                          class="fr-sidemenu__link"
                          href="#"
                          target="_self"
                          aria-current="page"
                          >Accès direct</a
                        >
                      </li>
                      <li class="fr-sidemenu__item">
                        <a class="fr-sidemenu__link" href="#" target="_self"
                          >Accès direct</a>
                      </li>
                    </ul>
                  </Sidemenu>
                  <div class="fr-col-12 fr-col-md-7">
                    <p>Some content</p>
                  </div>
                </div>`,
  }),
  args,
};

export const SidemenuOnRight = {
  render: (args) => ({
    components: { Sidemenu },
    setup() {
      return { args };
    },
    template: ` <div class="fr-grid-row">
                  <Sidemenu class="fr-col-12 fr-col-md-5" v-bind="args">
                    <template v-slot:title>
                      <span class="fr-icon--sm fr-icon-question-line" aria-hidden="true"></span>
                      Help
                    </template>
                    <ul class="fr-sidemenu__list">
                      <li class="fr-sidemenu__item fr-sidemenu__item--active">
                        <a
                          class="fr-sidemenu__link"
                          href="#"
                          target="_self"
                          aria-current="page"
                          >Accès direct</a
                        >
                      </li>
                      <li class="fr-sidemenu__item">
                        <a class="fr-sidemenu__link" href="#" target="_self"
                          >Accès direct</a>
                      </li>
                    </ul>
                  </Sidemenu>
                  <div class="fr-col-12 fr-col-md-7">
                    <p>Some content</p>
                  </div>
                </div>`,
  }),
  args: {
      ...args,
      onRight: true,
    }
};