const start = new Date()

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }


async function main(){

    await sleep(4000)
    console.log(new Date().getSeconds() - start.getSeconds())

}

main()

