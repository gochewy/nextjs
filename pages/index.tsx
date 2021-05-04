export {default} from '../src/pages/Landing';
// import useKeycloakInitialized from "../src/common/hooks/useKeycloakInitialized";
// import useKeycloak from "../src/common/hooks/useKeycloak";
//
// export default function Home() {
//   const keycloakInitialized = useKeycloakInitialized();
//   const keycloak = useKeycloak();
//
//   if (!keycloakInitialized) {
//     return null;
//   }
//
//   console.log(keycloak.tokenParsed);
//
//   return (
//     <div style={{padding: '50px', maxWidth: 600, margin: 'auto'}}>
//       {keycloak.authenticated ? (
//         <div>
//           <p>Name: {keycloak.tokenParsed.name}</p>
//           <p>Email: {keycloak.tokenParsed.email}</p>
//           <p>ID: {keycloak.tokenParsed.sub}</p>
//           <p>Token:
//             <br/>
//             {keycloak.token}
//           </p>
//           <button onClick={keycloak.logout}>Logout</button>
//         </div>
//       ): (
//         <div>
//           <button onClick={keycloak.login}>Login</button>
//         </div>
//       )}
//     </div>
//   );
// }
