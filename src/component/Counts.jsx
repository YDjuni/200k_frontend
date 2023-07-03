import React from 'react'
import CountUp from 'react-countup';

export default function Counts() {
  return (
    <>
<section id="counts" className="counts">
      <div className="container">
        <div className="text-center title">
          <h3>What we have achieved so far</h3>
          <p>
            Iusto et labore modi qui sapiente xpedita tempora et aut non ipsum
            consequatur illo.
          </p>
        </div>
        <div className="row counters position-relative">
          <div className="col-lg-3 col-6 text-center">
          <span
        data-purecounter-start="0"
        data-purecounter-end="9001"
        data-purecounter-currency="$"
        class="purecounter"
        >0</span>
            <p>Clients</p>
          </div>
          <div className="col-lg-3 col-6 text-center">
            <span>
              <CountUp 
                end={100}
                duration={10}
              />
            </span>
            <p>Projects</p>
          </div>
          <div className="col-lg-3 col-6 text-center">
            <span
              data-purecounter-start={0}
              data-purecounter-end={1463}
              data-purecounter-duration={1}
              className="purecounter"
            />
            <p>Hours Of Support</p>
          </div>
          <div className="col-lg-3 col-6 text-center">
            <span
              data-purecounter-start={0}
              data-purecounter-end={15}
              data-purecounter-duration={1}
              className="purecounter"
            />
            <p>Hard Workers</p>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
