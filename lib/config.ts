import { load } from 'cloud-config-client'

const config = load({
    name: process.env.APPLICATION_NAME || "",
    profiles: process.env.APPLICATION_PROFILES,
    label: process.env.CONFIG_LABEL?.replace("/", "(_)"),
    endpoint: process.env.CONFIG_URL,
    auth: {
        user: process.env.CONFIG_USERNAME || '',
        pass: process.env.CONFIG_PASSWORD || '',
    }
}).then((c: any) => c.toObject())
    .catch(err => {
        console.error("Failed to fetch configuration due to ", err)
        throw err
    })

export default config
