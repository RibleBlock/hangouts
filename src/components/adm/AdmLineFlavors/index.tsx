import { Flavor } from '../../../interfaces/module';
import {
  TR, TD, ArrowRight, PlusIcon,
} from './AdmLineFlavors.styles';

interface AdmLineFlavorsProps {
  currentFlavor: Flavor | null,
  action: (value?: any) => void
}
export function AdmLineFlavors({ currentFlavor, action }: AdmLineFlavorsProps) {
  if (!currentFlavor) {
    return (
      <TR onClick={action}>
        <TD>
          <p>Adicionar novo sabor de pizza</p>
          <PlusIcon weight="bold" />
        </TD>
      </TR>
    );
  }

  return (
    <TR onClick={() => action(currentFlavor)}>
      <TD>
        <p>{currentFlavor.name}</p>
        <ArrowRight weight="bold" />
      </TD>
    </TR>
  );
}
