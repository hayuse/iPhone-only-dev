import type { NextApiRequest, NextApiResponse } from 'next';
import { detectRed } from '../../utils/colorDetection';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { imageData } = req.body;

        if (!imageData) {
            return res.status(400).json({ message: 'No image data provided' });
        }

        try {
            const hasRed = await detectRed(imageData);
            return res.status(200).json({ hasRed });
        } catch (error) {
            return res.status(500).json({ message: 'Error processing image', error });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}