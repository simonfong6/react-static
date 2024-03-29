// IconSection.js
import React from 'react';

class IconSection extends React.Component {
  render() {
    return (
      <section class="wrapper style2 container special-alt">
        <div class="row gtr-50">
          <div class="col-8 col-12-narrower">

            <header>
              <h2>Behold the <strong>icons</strong> that visualize what you’re all about. or just take up space. your call bro.</h2>
            </header>
            <p>Sed tristique purus vitae volutpat ultrices. Aliquam eu elit eget arcu comteger ut fermentum lorem. Lorem ipsum dolor sit amet. Sed tristique purus vitae volutpat ultrices. eu elit eget commodo. Sed tristique purus vitae volutpat ultrices. Aliquam eu elit eget arcu commodo.</p>
            <footer>
              <ul class="buttons">
                <li><a href="#" class="button">Find Out More</a></li>
              </ul>
            </footer>

          </div>
          <div class="col-4 col-12-narrower imp-narrower">

            <ul class="featured-icons">
              <li><span class="icon fa-clock-o"><span class="label">Feature 1</span></span></li>
              <li><span class="icon fa-volume-up"><span class="label">Feature 2</span></span></li>
              <li><span class="icon fa-laptop"><span class="label">Feature 3</span></span></li>
              <li><span class="icon fa-inbox"><span class="label">Feature 4</span></span></li>
              <li><span class="icon fa-lock"><span class="label">Feature 5</span></span></li>
              <li><span class="icon fa-cog"><span class="label">Feature 6</span></span></li>
            </ul>

          </div>
        </div>
      </section>
    );
  }
}

export default IconSection;