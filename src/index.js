import appFront from "./server.js";

appFront.listen(appFront.get('port'), ()=>{
    console.log(`Frontend levantado en puerto ${appFront.get('port')}`)
})