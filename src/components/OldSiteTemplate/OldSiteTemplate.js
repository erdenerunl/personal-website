import "./OldSiteTemplate.scss";

const OldSiteTemplate = () => {
  return (
    <div className="wrapper">
      <header>
        <div className="container py-3">
          <div className="row">
            <div className="col-4 d-flex align-items-center ">
              <h1 className="old-header">Erdener Ünal</h1>
            </div>
            <div className="col-4">
              <div className="banner-wrapper">
                <div className="banner"></div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-3 section">
              <div className="section-header p-3">
                <h3>Contact Me</h3>
              </div>
              <div className="section-list">
                <div className="pb-2">
                  <span className="pe-2">Email:</span>
                  <a className="" href="mailto:erdenerunale@gmail.com">
                    erdenerunale@gmail.com
                  </a>
                </div>
                <div className="pb-2">
                  <span className="pe-2">Github:</span>
                  <a href="https://github.com/erdenerunl">erdenerunl</a>
                </div>
                <div className="pb-2">
                  <span className="pe-2">Linkedin:</span>
                  <a href="https://www.linkedin.com/in/erdenerunal/">erdenerunal</a>
                </div>
              </div>
            </div>
            <div className="col-6 section">
              <h1 className="text-center p-2">Hi, I'm Erdener and It's my Personal Website.</h1>
              <h3 className="text-center p-2">Frontend Developer && Part-time Poet</h3>
              <div className="section-list">

              </div>
            </div>
            <div className="col-3 section">
              <div className="section-header p-3">
                <h3>Languages and Tools I Use</h3>
              </div>
              <div className="section-list">
                <ul>
                  <li><a target="_blank" rel="noreferrer noopener" href="https://www.w3schools.com/html/">HTML5</a></li>
                  <li><a target="_blank" rel="noreferrer noopener" href="https://www.w3schools.com/css/">CSS</a></li>
                  <li><a target="_blank" rel="noreferrer noopener" href="https://sass-lang.com/guide">SCSS</a></li>
                  <li><a target="_blank" rel="noreferrer noopener" href="https://www.javascript.com/">JavaScript</a></li>
                  <li><a target="_blank" rel="noreferrer noopener" href="https://www.typescriptlang.org/">TypeScript</a></li>
                  <li><a target="_blank" rel="noreferrer noopener" href="https://angular.io/docs">Angular</a></li>
                  <li><a target="_blank" rel="noreferrer noopener" href="https://tr.reactjs.org/">React.js</a></li>
                  <li><a target="_blank" rel="noreferrer noopener" href="https://vuejs.org/">Vue.js</a></li>
                  <li><a target="_blank" rel="noreferrer noopener" href="https://nodejs.org/en/">Node.js</a></li>
                  <li><a target="_blank" rel="noreferrer noopener" href="https://git-scm.com/">Git</a></li>
                  <li><a target="_blank" rel="noreferrer noopener" href="https://www.mongodb.com/">MongoDB</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className="footer-container">
        © 2022 | This website built for Erdener Ünal by Erdener Ünal.
        </div> 
      </footer>
    </div>
  );
};

export default OldSiteTemplate;
