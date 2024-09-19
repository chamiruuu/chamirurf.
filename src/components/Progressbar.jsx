import Stack from '@mui/joy/Stack';
import LinearProgress from '@mui/joy/LinearProgress';

const ProgressBar = () => {
    return (
        <Stack spacing={2} sx={{ width: '20%', marginBottom: '1rem' }}>
            <LinearProgress
                determinate={false}
                size="sm"
                value={35}
                variant="soft"
                sx={{
                    '--variant-softBg': '#163831', // Customize the progress bar color
                    '--variant-solidBg': '#47b49d',
                }}
            />
        </Stack>
    );
};

export default ProgressBar;


// color: 'var(--variant-solidBg, #00ff2b)'
//backgroundColor: 'var(--variant-softBg, #2b639b)'