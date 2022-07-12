import './Footer.css'

function Flinio() {
  return (
    <footer className='body'>
      <div className="container-fluid container-semi-fluid footer-extra-content">
        <div className="glossary-container body-accent-md row"></div>
        <div className="footer-banner"></div>
      </div>
      <div className="main-footer">
        <div className="container-fluid container-semi-fluid footer-container">
          <div className="footer-subscribe-row row">
            <div className="col-lg-3 col-md-6 col-sm-12 col-12">
              <div className="subscribe-title">
                ¡SUSCRÍBETE A NUESTRO NEWSLETTER!
              </div>
            </div>

            <form className="col-lg-9 col-md-6 col-sm-12 col-12">
              <div className="">
                <div className="row">
                  <div className="col-lg-6 col-12">
                    <input
                      type="email"
                      id="promotional_newsletter_form_email"
                      name="promotional_newsletter_form[email]"
                      required="required"
                      placeholder="Suscríbete con tu email"
                      autocomplete="email"
                      className="row form-control"
                    />

                    <div className="checkbox">
                      <label className="body-base-sm">
                        <input
                          type="checkbox"
                          id="terms"
                          name="promotional_newsletter_form[terms]"
                          required="required"
                          value="1"
                        />
                        Acepto{" "}
                        <a
                          className="link-base-sm"
                          href="/sp/terminos-y-condiciones"
                          target="_blank"
                        >
                          términos y condiciones
                        </a>{" "}
                        y la{" "}
                        <a
                          className="link-base-sm"
                          href="/sp/privacidad"
                          target="_blank"
                        >
                          Política de Privacidad y Tratamiento de Datos
                          Personales
                        </a>
                      </label>
                    </div>

                    <input
                      type="hidden"
                      id="promotional_newsletter_form_gender"
                      name="promotional_newsletter_form[gender]"
                      className="row form-control"
                    />

                    <input
                      type="hidden"
                      id="promotional_newsletter_form_source"
                      name="promotional_newsletter_form[source]"
                      value="FooterPage"
                      className="row form-control"
                    />

                    <div className="checkbox">
                      <label className="body-base-sm">
                        <input
                          type="checkbox"
                          id="promotional_newsletter_form_additional_purposes_accepted"
                          name="promotional_newsletter_form[additional_purposes_accepted]"
                          required="required"
                          value="1"
                        />
                        Autorizo el uso de mi información para{" "}
                        <a
                          className="link-base-sm"
                          href="/sp/consentimiento-fines-adicionales"
                          target="_blank"
                        >
                          fines adicionales
                        </a>
                      </label>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-12">
                    <button
                      type="submit"
                      className="btn btn-block btn-sm btn-dark col-12"
                      data-gender="male"
                      disabled=""
                    >
                      Ofertas para hombre
                    </button>
                  </div>
                  <div className="col-lg-3 col-md-6 col-12">
                    <button
                      type="submit"
                      className="btn btn-block btn-sm btn-dark col-12"
                      data-gender="female"
                      disabled=""
                    >
                      Ofertas para mujer
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>

          <div
            className="footer-payment-methods-container row"
            id="payment-methods"
          >
            <ul className="footer-payment-methods-list">
              <li className="payment-method">
                <div className="payment-icon col-xl-12 col-lg-4 d-none d-lg-block">
                  <span className="icon"></span>
                </div>
                <div className="payment-title col-xl-12 col-lg-8">
                  CMR Falabella
                </div>
              </li>
              <li className="payment-method">
                <div className="payment-icon col-xl-12 col-lg-4 d-none d-lg-block">
                  <span className="icon"></span>
                </div>
                <div className="payment-title col-xl-12 col-lg-8">Fpay</div>
              </li>
              <li className="payment-method">
                <div className="payment-icon col-xl-12 col-lg-4 d-none d-lg-block">
                  <span className="icon"></span>
                </div>
                <div className="payment-title col-xl-12 col-lg-8">Visa</div>
              </li>
              <li className="payment-method">
                <div className="payment-icon col-xl-12 col-lg-4 d-none d-lg-block">
                  <span className="icon"></span>
                </div>
                <div className="payment-title col-xl-12 col-lg-8">MasterCard</div>
              </li>
              <li className="payment-method">
                <div className="payment-icon col-xl-12 col-lg-4 d-none d-lg-block">
                  <span className="icon"></span>
                </div>
                <div className="payment-title col-xl-12 col-lg-8">
                  American Express
                </div>
              </li>
              <li className="payment-method">
                <div className="payment-icon col-xl-12 col-lg-4 d-none d-lg-block">
                  <span className="icon"></span>
                </div>
                <div className="payment-title col-xl-12 col-lg-8">Diners Club</div>
              </li>
              <li className="payment-method">
                <div className="payment-icon col-xl-12 col-lg-4 d-none d-lg-block">
                  <span className="icon"></span>
                </div>
                <div className="payment-title col-xl-12 col-lg-8">
                  Depósito online o en agencia
                </div>
              </li>
              <li className="payment-method">
                <div className="payment-icon col-xl-12 col-lg-4 d-none d-lg-block">
                  <span className="icon"></span>
                </div>
                <div className="payment-title col-xl-12 col-lg-8">PagoEfectivo</div>
              </li>
            </ul>
          </div>

          <div className="footer-nav-follow-us-row row ">
            <div className="col-md-9 col-sm-12 footer-nav row ">
              <div
                className="col-md-3 col-sm-12 footer-nav-block"
                data-collapse="#about-linio-footer-menu"
              >
                <div className="footer-nav-title">Acerca de Linio</div>
                <span className="icon icon-sm footer-nav-caret d-block d-md-none"></span>

                <dl id="about-linio-footer-menu" className="description-list">
                  <dd>
                    <a href="/sp/acercadenosotros">Historia</a>
                  </dd>
                  <dd>
                    <a href="/sp/contactenos">Ayuda</a>
                  </dd>
                  <dd>
                    <a href="/sp/terminos-y-condiciones">
                      Nuevos Términos de Uso y Condiciones de Entrega
                    </a>
                  </dd>
                  <dd>
                    <a href="/sp/propiedad-intelectual">
                      Protección de Propiedad Intelectual
                    </a>
                  </dd>
                  <dd>
                    <a href="/cm/same-day-delivery">Envío en 24 horas</a>
                  </dd>
                  <dd>
                    <a href="/sp/loyaltyprograms">Programas de Lealtad</a>
                  </dd>
                  <dd>
                    <a href="/sp/afiliados">Vuélvete un Afiliado</a>
                  </dd>
                  <dd>
                    <a href="https://muevete.falabella.com/">
                      Trabaja con nosotros
                    </a>
                  </dd>
                  <dd>
                    <a href="https://canaldeintegridad.ines.cl/linio/">
                      Canal de Integridad
                    </a>
                  </dd>
                  <dd>
                    <a href="/directorio">Directorio</a>
                  </dd>
                  <dd>
                    <a href="/account/login">Login</a>
                  </dd>
                  <dd>
                    <a href="/sp/legales">Legales</a>
                  </dd>
                  <dd>
                    <a href="/sp/linio-grupo-falabella">Grupo Falabella</a>
                  </dd>
                  <dd>
                    <a href="https://developers.linio.com">Developers</a>
                  </dd>
                </dl>
              </div>

              <div
                className="col-md-3 col-sm-12 footer-nav-block"
                data-collapse="#customer-service-footer-menu"
              >
                <div className="footer-nav-title">Servicio al cliente</div>
                <span className="icon icon-sm footer-nav-caret d-block d-md-none"></span>

                <dl id="customer-service-footer-menu" className="description-list">
                  <dd>
                    <a href="/sp/preguntas-frecuentes">Preguntas Frecuentes</a>
                  </dd>
                  <dd>
                    <a href="/sp/contactenos">Contacto</a>
                  </dd>
                  <dd>
                    <a href="/sp/preguntas-frecuentes/formas-de-pago-y-precio">
                      Formas de Pago
                    </a>
                  </dd>
                  <dd>
                    <a href="/sp/politica-devoluciones">
                      Política de Garantía y Devoluciones
                    </a>
                  </dd>
                  <dd>
                    <a href="/sp/privacidad">Aviso de Privacidad</a>
                  </dd>
                  <dd>
                    <a href="/sp/politicas-productos-internacionales">
                      Política de venta de productos internacionales
                    </a>
                  </dd>
                </dl>
              </div>

              <div
                className="col-md-3 col-sm-12 footer-nav-block"
                data-collapse="#directory-footer-menu"
              >
                <div className="footer-nav-title">Linio latinoamérica</div>
                <span className="icon icon-sm footer-nav-caret d-md-none"></span>

                <div id="directory-footer-menu" className="list-container row">
                  <dl className="col-md-6 col-sm-12 description-list footer-countries-list">
                    <dd>
                      <a href="https://www.linio.com.co/">Colombia</a>
                    </dd>
                    <dd>
                      <a href="https://www.linio.cl/">Chile</a>
                    </dd>
                    <dd>
                      <a href="https://www.linio.com.mx/">México</a>
                    </dd>
                  </dl>

                  <dl className="col-md-6 col-sm-12 description-list">
                    <dd>
                      <a href="/">Perú</a>
                    </dd>
                    <dd>
                      <a href="https://www.falabella.com.pe/falabella-pe/">
                        Falabella
                      </a>
                    </dd>
                    <dd>
                      <a href="https://www.sodimac.com.pe/sodimac-pe/">
                        Sodimac
                      </a>
                    </dd>
                  </dl>
                </div>
              </div>

              <div
                className="col-md-3 col-sm-12 footer-nav-block"
                data-collapse="#news-footer-menu"
              >
                <div className="footer-nav-title">Novedades</div>
                <span className="icon icon-sm footer-nav-caret d-block d-md-none"></span>
                <dl id="news-footer-menu" className="description-list">
                  <dd>
                    <a href="/cm/cyber-monday">CMR days</a>
                  </dd>
                  <dd>
                    <a href="/cm/dias-naranja">Días Naranja</a>
                  </dd>
                  <dd>
                    <a href="/cm/supermercado">Supermercado</a>
                  </dd>
                  <dd>
                    <a href="http://blog.linio.com.pe">Blog Linio</a>
                  </dd>
                  <dd>
                    <a href="/sp/price-index">Price Index</a>
                  </dd>
                </dl>
              </div>
            </div>

            <div className="col-md-3 col-sm-12 footer-follow-us-block footer-left-border row ">
              <div className="col-lg-12 col-md-12 col-sm-4 col-12 footer-follow-us-icons-wrapper">
                <div className="footer-nav-title float-left">Síguenos</div>
                <div className="float-left footer-social-icons-row">
                  <a
                    href="https://www.facebook.com/LinioPeru/"
                    target="_blank"
                    title="Sigue Linio Perú on Facebook"
                    className="icon icon-md icon-facebook"
                  ></a>
                  <a
                    href="https://twitter.com/LinioPeru/"
                    target="_blank"
                    title="Sigue Linio Perú on Twitter"
                    className="icon icon-md icon-twitter"
                  ></a>
                  <a
                    href="https://www.youtube.com/channel/UCeILO0qSGn4HdEf3AZK08-A"
                    target="_blank"
                    title="Sigue Linio Perú on Youtube"
                    className="icon icon-md icon-youtube"
                  ></a>
                </div>
              </div>

              <div className="apps-icons-container-wrapper col-12 col-sm-8">
                <a href="/sp/tienda-app" className="icon-app-wrapper">
                  <i className="sprite sprite-googleplay"></i>
                </a>

                <a href="/sp/tienda-app" className="icon-app-wrapper">
                  <i className="sprite sprite-appstore"></i>
                </a>

                <a href="/sp/tienda-app" className="icon-app-wrapper">
                  <i className="sprite sprite-huawei-app"></i>
                </a>
              </div>

              <div className="certification-badges row">
                <a target="_blank" href="/claims-book">
                  <i className="sprite sprite-complaintbook"></i>
                </a>
              </div>

              <i className="powered-by-linio-logo col-md-12 col-12"></i>

              <div className="col-12 footer-copyright">
                © 2022 Linio Perú | Todos los derechos reservados.{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Flinio;
