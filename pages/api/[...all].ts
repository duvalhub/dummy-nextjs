import { getConfig } from 'lib/config';
import { NextApiRequest, NextApiResponse } from "next";
import httpProxyMiddleware from 'next-http-proxy-middleware';

const backend = getConfig('backend.url')

export default (req: NextApiRequest, res: NextApiResponse) => httpProxyMiddleware(req, res, {
    // You can use the `http-proxy` option
    target: backend,
    // In addition, you can use the `pathRewrite` option provided by `next-http-proxy`
    pathRewrite: {
        '^/api/google': 'https://google.com',
        '^/api/myhome': 'https://github.com/stegano'
    },
});