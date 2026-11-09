const isLocal = window.location.hostname === "127.0.0.1"
const base = isLocal ? "" : "/curriculum"

const alertBase = () => {
    console.info(base === "" ? "local" : "gitPages")
}

alertBase()