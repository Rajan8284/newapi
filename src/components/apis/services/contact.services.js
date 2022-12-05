import { mainWrapper } from "./main";
import Constant from "../constants";
const ContactService={
getContact,
saveContactUs,
putContact
};
function getContact(params) {
    return mainWrapper.get(Constant.host + "/posts",params);
};

function saveContactUs(params) {
    return mainWrapper.post(Constant.host + "/posts",params);
};

function putContact(params) {
    return mainWrapper.put(Constant.host + "/posts/1",params);
};


export default  ContactService