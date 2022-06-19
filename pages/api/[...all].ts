import configPromise from 'lib/config';
import { NextApiRequest, NextApiResponse } from "next";
import httpProxyMiddleware from 'next-http-proxy-middleware';

export default (req: NextApiRequest, res: NextApiResponse) => {
    return configPromise.then(config => {
        const target = config?.services['choppeabarrock-backend']?.url
        return httpProxyMiddleware(req, res, {
            // You can use the `http-proxy` option
            target,
            // In addition, you can use the `pathRewrite` option provided by `next-http-proxy`
            pathRewrite: {
                '^/api/google': 'https://google.com',
                '^/api/myhome': 'https://github.com/stegano'
            },
        })
    })
};