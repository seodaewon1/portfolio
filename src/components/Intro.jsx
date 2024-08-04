import React, { useEffect } from "react";
import $ from "jquery";

export default function Intro() {
  useEffect(() => {
    // DOM이 준비된 후에 jQuery 코드를 실행합니다.
    $(document).ready(function () {
      setTimeout(function () {
        $("#ctn-preloader").addClass("loaded");
        // Una vez haya terminado el preloader aparezca el scroll
        $("body").removeClass("no-scroll-y");

        if ($("#ctn-preloader").hasClass("loaded")) {
          // Es para que una vez que se haya ido el preloader se elimine toda la seccion preloader
          $("#preloader")
            .delay(2000)
            .queue(function () {
              $(this).remove();
            });
        }
      }, 5000);
    });
  }, []);
  return (
    <section>
      {/* <div id="preloader">
        <div id="ctn-preloader" class="ctn-preloader">
          <div class="animation-preloader">
            <div class="spinner"></div>
            <div class="txt-loading">
              <span data-text-preloader="L" class="letters-loading">
                {" "}
                L{" "}
              </span>

              <span data-text-preloader="O" class="letters-loading">
                {" "}
                O{" "}
              </span>

              <span data-text-preloader="A" class="letters-loading">
                {" "}
                A{" "}
              </span>

              <span data-text-preloader="D" class="letters-loading">
                {" "}
                D{" "}
              </span>

              <span data-text-preloader="I" class="letters-loading">
                {" "}
                I{" "}
              </span>

              <span data-text-preloader="N" class="letters-loading">
                {" "}
                N{" "}
              </span>

              <span data-text-preloader="G" class="letters-loading">
                {" "}
                G{" "}
              </span>
            </div>
          </div>
          <div class="loader-section section-left"></div>
          <div class="loader-section section-right"></div>
        </div>
      </div> */}
    </section>
  );
}
