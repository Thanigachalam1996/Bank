import axios from 'axios';

const Base_Url="http://localhost:8082/profile";

class UpdateProfile{
    updateProfile(profile,profileId){
        return axios.put(Base_Url+ '/' +profileId,profile);
    }
}
export default UpdateProfile;