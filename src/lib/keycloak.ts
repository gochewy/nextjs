declare const Keycloak: any;

let keycloak = process.browser ? new Keycloak(
    {
        "realm": "Sample",
        "auth-server-url": "http://modules.swarn.ecdev.site/auth/",
        "ssl-required": "external",
        "resource": "sample-client",
        "public-client": true,
        "confidential-port": 0,
        "clientId": "sample-client",
        "scope" : "openid email profile offline_access"
    }
) : undefined;

export const keycloakInit: Promise<any> = keycloak ? keycloak.init() : Promise.resolve();

if(process.browser){
    (window as any).kc = keycloak;
}
export default keycloak;