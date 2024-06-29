import { useIdentityContext } from './IdentityProvider';
import { getSlicedAddress } from '../getSlicedAddress';
import { cn, text } from '../../styles/theme';
import type { AddressReact } from '../types';

export function Address({ address = null, className }: AddressReact) {
  const { address: contextAddress } = useIdentityContext();
  if (!contextAddress && !address) {
    throw new Error(
      'Address: an Ethereum address must be provided to the Identity or Address component.',
    );
  }

  return (
    <span data-testid="ockAddress" className={cn(text.label2, className)}>
      {contextAddress ?? address}
    </span>
  );
}
