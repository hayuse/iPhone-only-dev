import type { NextApiRequest, NextApiResponse } from 'next';
import { detectRedColor } from '../../utils/colorDetection';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { imageData } = req.body;

        if (!imageData) {
            return res.status(400).json({ message: 'No image data provided' });
        }

        try {
            const isRedDetected = detectRedColor(imageData);
            return res.status(200).json({ redDetected: isRedDetected });
        } catch (error) {
            return res.status(500).json({ message: 'Error processing image', error });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}