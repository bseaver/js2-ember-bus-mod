# bus-mod
## By David Quisenberry and Benjamin T. Seaver

Inspired by the book "Business Model Generation", seeks to create a way to track business model evolution over time.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Bower](https://bower.io/)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* `cd bus-mod`
* `npm install`
* `bower install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

  ## Commands Used:
  * ember new bus-mod
  * ember g component key-partners
  * ember g component key-activities
  * ember g component value-propositions
  * ember g component customer-segments
  * ember g component key-resources
  * ember g component sales-channels
  * ember g component cost-structures
  * ember g component revenue-streams
  * ember install ember-bootstrap
  * ember g route index
  * manually added /templates/application.hbs
  * manually created business-model-blog.json
  * imported that into FireBase
  * ember g model businessModel
  * ember install emberfire
  * add firebase env info to config/environment.js
  
