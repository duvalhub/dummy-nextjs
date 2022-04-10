
type ConfigClient = {
    get(key: string): any
}

let config_client: ConfigClient

try {
    connect()
} catch (e) {
    console.error(e)
}

function connect() {
    const configs: { [key: string]: any } = {
        'backend.url': 'https://www.example.com'
    }
    config_client = {
        get: (key) => configs[key]
    }
}

export function getConfig(key: string): any {
    return config_client.get(key)
}