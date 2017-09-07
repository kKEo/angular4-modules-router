import {Component} from "@angular/core";
import {ITreeOptions, TREE_ACTIONS} from "angular-tree-component";

@Component({
  selector: 'app-projects-template',
  template: `
    <hr>

    <tree-root [nodes]="nodes" [focused]="true" [options]="options"></tree-root>
    
    
    <hr>
      <ng-content></ng-content>
    <hr>
  `
}) export class ProjectsTemplateComponent {

  nodes = [
    {
      id: 1,
      name: 'root1',
      isExpanded: true,
      children: [
        {
          id: 2,
          name: 'child1'
        }, {
          id: 3,
          name: 'child2'
        }
      ]
    }
  ]

  options: ITreeOptions = {
    displayField: 'nodeName',
    isExpandedField: 'expanded',
    idField: 'uuid',
    actionMapping: {
      mouse: {
        dblClick: (tree, node, $event) => {
          if (node.hasChildren) {
            TREE_ACTIONS.TOGGLE_EXPANDED(tree, node, $event)
          }
        }
      }
    },
    nodeHeight: 23,
    allowDrag: (node) => true,
    allowDrop: (node) => true,
    useVirtualScroll: true,
    animateExpand: true,
    animateSpeed: 30,
    animateAcceleration: 1.2
  }


}
