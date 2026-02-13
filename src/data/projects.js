// TODO Add a couple lines about each project
const data = [
  {
    title: 'Grammared Language',
    subtitle: 'Adding Grammarly (and other) open source models to LanguageTool',
    link: 'https://github.com/rayliuca/grammared-language',
    image: '/images/projects/grammared_language.png',
    date: '2026-02-01',
    desc:
      'Adding Grammarly (and other) open source models to LanguageTool. '
      + 'Improving the LanguageTool server by adding AI/ ML powered remote grammar checking models to improve contextual corrections. '
      + 'To improve efficiency, models were served on triton inference server, enabling dynamic batching and horizonal scaling.',
  },
  {
    title: 'T-Ragx',
    subtitle: 'Enhancing Translation with RAG-Powered Large Language Models',
    link: 'https://github.com/rayliuca/T-Ragx',
    image: '/images/projects/T-Ragx.png',
    date: '2024-03-01',
    desc:
      'Enhancing Translation with RAG-Powered Large Language Models. '
      + 'Adding translation memory and glossary to ground LLM translation outputs.'
      + ' This framework successfully improved the translation quality by 29% sacrebleu and 0.4% comet22 for task specific translations.',
  },
  {
    title: 'Pay Day Robo',
    subtitle: '2021 HackED Hackathon - Won the Best use of Google Cloud Award',
    link: 'https://github.com/rayliuca/PayDayRobo',
    image: '/images/projects/PayDayRobo-Pub.png',
    date: '2021-01-17',
    desc:
      "Built for Alberta's largest student run hackathon. "
      + 'Each month, PayDayRobo sends the optimal number of shares to sell in an ETF portfolio to the users via SMS or email.'
      + ' It efficiently minimize the commission and allocation error using a genetic algorithm.',
  },
  {
    title: 'Locker Registrar',
    subtitle: 'subtitle',
    // link: 'https://public.tableau.com/profile/ray.liu#!/vizhome/GlobalAffairsCanadaTravelAdvisoriesMap/Dashboard1',
    image: '/images/projects/ETLC.jpg',
    date: '2020-03-01',
    desc:
      'An e-commerce software using Google Form, App Script, Cloud SQL, and Square Inc. APIs'
      + ' to register and rent lockers under student clubs\' control in the ETLC building. '
      + 'Completed the prototype personally, and now collaborating with the other ECE Clubs as the project manager.',
  },
  {
    title: 'Index AI',
    subtitle: 'subtitle',
    link: 'https://github.com/rayliuca/IndexAI',
    image: '/images/projects/IndexAI.png',
    date: '2020-12-20',
    desc:
      'A failed attempt to predict the market. Using popular tools such as scikit-learn and TensorFlow with Keras, '
      + 'applied models like Random Forest, XGBoost, MLP, CNN, etc. Learned important lessons in terms of data wrangling '
      + 'and the limitations of machine learning. ',
  },
  {
    title: 'Ymap',
    subtitle: 'subtitle',
    link: 'https://ymap.rayliu.ca/',
    image: '/images/projects/Ymap.png',
    date: '2019-05-5',
    desc:
      'A JavaScript web app using Leaflet with datasets from Edmonton’s Open Data Program'
      + ' to show the city’s property assessments and allows users to compare between different years '
      + 'while also enabling the user to filter data by property values, land size, and zoning. '
      + 'The idea of this project originated from house hunting with my parent in 2016.',
  },
  {
    title: 'Canada Travel Advisory',
    subtitle: 'subtitle',
    link: 'https://public.tableau.com/profile/ray.liu#!/vizhome/GlobalAffairsCanadaTravelAdvisoriesMap/Dashboard1',
    image: '/images/projects/TravelAdvisoriesMap.png',
    date: '2020-03-1',
    desc:
      'Presents the travel advisories in an easy to access map! Before COVID became a pandemic, '
      + 'Canadians were advised not to travel to countries with high risk of infection. '
      + 'Using Google App Script, I scrape the data from the Official Global Travel Advisories daily '
      + 'and mapped them on Tableau Public',
  },
];

export default data;
