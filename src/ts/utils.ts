import copy from 'copy-to-clipboard';
import toast from 'svelte-french-toast';

export const share = (url: string) => {
	if (navigator?.share && navigator?.canShare({ url })) {
		navigator.share({ url });
	} else {
		copy(url);
		toast.success('Link copied to clipboard!');
	}
};
