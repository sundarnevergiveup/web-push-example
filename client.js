async function registerServiceWorker() {
    const register = await navigator.serviceWorker.register('./worker.js', {
        scope: '/'
    });

    const subscription = await register.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: publicVapidKey,
    });

    await fetch("/subscribe", {
        method: "POST",
        body: JSON.stringify(subscription),
        headers: {
            "Content-Type": "application/json",
        }
    })
}

const publicVapidKey = "BAP1VS7WSTgxlEof-6qR9PrQeUC0CE7PCFp6Usjh-qmbh60fBQAhKj0Uc-EKZCdvif6rZsjXSOu6TOLj_SFbXQQ";

const privateVapidKey = "III5ka134qCsWpj9NLVlzpfiRGjr1NH0jd6VCU8pLTw";

registerServiceWorker()
