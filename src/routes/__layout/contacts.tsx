import { ICONS } from "@/icons"
import { useWindowSize } from "@uidotdev/usehooks"

const PHONE_NUMBER = '+393474497023'
const FORMATTED_PHONE_NUMBER = '+39 347 449 7023'

export function Component() {
  const size = useWindowSize()

  return (
    <div className="h-full flex flex-col items-center gap-5">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d183063.67564339846!2d10.115716080923132!3d44.199446816929765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d56b1c3b42fbc3%3A0xc5789ae652f61d12!2sCooperativa%20agricola%20dei%20colli!5e0!3m2!1sen!2sit!4v1701728611810!5m2!1sen!2sit"
        width={size.width && size.width < 1000 ? size.width : 1000}
        height="450"
        style={{ border: "10px solid white", borderRadius: "10px" }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <form className="w-full lg:w-1/2 flex flex-col gap-3 bg-white p-5 rounded-lg" action="mailto:cooperativaagricoladeicolli@gmail.com" method="post" encType="text/plain" >
        <div className="flex flex-row gap-1 items-center">Telefonaci al <a href={`tel:${PHONE_NUMBER}`}>{FORMATTED_PHONE_NUMBER}</a> o WhatsApp <a href={`https://api.whatsapp.com/send?phone=${PHONE_NUMBER}`}><img src={ICONS.whatsapp} width="35" alt="WhatsApp" /></a></div>
        <div>Contattaci per email a <a href="mailto:cooperativaagricoladeicolli@gmail.com">cooperativaagricoladeicolli@gmail.com</a></div>
        <textarea className="bg-white p-5 border-green-900 border-4 rounded-lg h-40" name="Messaggio" placeholder="Cosa vuoi scriverci?" />
        <button className="bg-green-900 text-white" type="submit">INVIA</button>
      </form>
    </div>
  )
}