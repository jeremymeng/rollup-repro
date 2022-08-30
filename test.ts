import cjs from "@rollup/plugin-commonjs";
import { PluginContext } from "rollup";

function test(context: PluginContext, id: string) {
  const load = cjs().load;
  if (load) {
    load.call(context, id);
  }
}
