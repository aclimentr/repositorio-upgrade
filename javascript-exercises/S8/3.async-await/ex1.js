const runTimeOut = async () => {
    const promise = await new Promise((resolve) => {
        setTimeout(function () {
            resolve();
        }, 2000);
    })

    await promise.then(() => {console.log('Time out!')})
};

runTimeOut();