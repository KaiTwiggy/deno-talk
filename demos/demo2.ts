import * as deno from "deno";

(async function(){
    await deno.copyFile("test.txt", "test2.txt");
})();