import "./OldSiteTemplate.scss";

const OldSiteTemplate = () => {
  return (
    <>
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
                  <span className="pe-2" >Email:</span>
                  <a className="" href="mailto:erdenerunale@gmail.com">
                    erdenerunale@gmail.com
                  </a>
                </div>
                <div className="pb-2">
                  <span className="pe-2" >Github:</span>
                  <a href="https://github.com/erdenerunl">erdenerunl</a>
                </div>
                <div className="pb-2">
                  <span className="pe-2" >Linkedin:</span>
                  <a href="https://www.linkedin.com/in/erdenerunal/">erdenerunal</a>
                </div>
              </div>
            </div>
            <div className="col-6 section">
                <h1 className="text-center p-2" >
                    Hi, I'm Erdener and It's my Personal Website.
                </h1>
                <h3 className="text-center p-2">
                    Frontend Developer && Part-time Poet
                </h3>
            </div>
            <div className="col-3 section"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OldSiteTemplate;
