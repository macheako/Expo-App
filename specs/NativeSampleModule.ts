import {TurboModule, TurboModuleRegistry} from 'react-native';
import { Int32 } from 'react-native/Libraries/Types/CodegenTypes';

export interface Spec extends TurboModule {
  readonly reverseString: (input: string) => string;
  readonly startScanner: (
    device_ip: string, 
    device_port: Int32,
    host_ip: string,
    host_port: Int32
  ) => boolean;
  readonly scan: () => Int32;  
}

export default TurboModuleRegistry.getEnforcing<Spec>(
  'NativeSampleModule',
) as Spec | null;