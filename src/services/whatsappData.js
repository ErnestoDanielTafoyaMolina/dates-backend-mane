import { configs } from "../config";


export const SendMessage = async ( phoneNbr=configs.DEFAULT_PHONE_NUMBER, templateName="hello_world" ) => {
    const url = `${configs.FB_URL}/${configs.BOT_ID}/messages`
    var data = {
        messaging_product: 'whatsapp',
        to: phoneNbr,
        type: 'template',
        template: {
          name:templateName,
          language:{ code: 'en_US' }
        }
      };
      
      const postReq = {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer ' + configs.FB_TOKEN,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
        json: true
      };
    try {
        const data = await fetch(url,postReq)
        const response = await data.json();
        console.log(response);
        return {
            ok:true,
            msg:"Message has been send!"
        };
    } catch (error) {
      console.error("Hubo un error enviando el mensaje de whatsapp: ", error)
      return {
        ok:false, 
        msg:"There was an error sending the message",
        error
      };  
    };
};