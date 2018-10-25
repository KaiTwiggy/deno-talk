import { listen, copy } from "deno";

(async function(){
    const listener = listen("tcp", ":8080");
    while (true) {
    const conn = await listener.accept();
    copy(conn, conn);
    }
})();