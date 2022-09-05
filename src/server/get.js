import WebApiClient from './api';

let apiClient = null;
export function getApiClient() {
  if (apiClient == null) {
    apiClient = new WebApiClient();
  }
  return apiClient;
}

const Get = () => {
  return (
    <></>
  );
};

export default Get;
