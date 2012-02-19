if (typeof org === 'undefined') {
  org = {};
}
if (typeof org.sed_ml === 'undefined') {
  org.sed_ml = {};
}
if (!org.sed_ml.Mappings) {
  org.sed_ml.Mappings = {};
}
org.sed_ml.Curve = new Jsonix.Model.ClassInfo({
    name: 'org.sed_ml.Curve'
  });
org.sed_ml.SEDBase = new Jsonix.Model.ClassInfo({
    name: 'org.sed_ml.SEDBase'
  });
org.sed_ml.Notes = new Jsonix.Model.ClassInfo({
    name: 'org.sed_ml.Notes'
  });
org.sed_ml.Annotation = new Jsonix.Model.ClassInfo({
    name: 'org.sed_ml.Annotation'
  });
org.sed_ml.Model = new Jsonix.Model.ClassInfo({
    name: 'org.sed_ml.Model'
  });
org.sed_ml.ListOfChanges = new Jsonix.Model.ClassInfo({
    name: 'org.sed_ml.ListOfChanges'
  });
org.sed_ml.ChangeAttribute = new Jsonix.Model.ClassInfo({
    name: 'org.sed_ml.ChangeAttribute'
  });
org.sed_ml.RemoveXML = new Jsonix.Model.ClassInfo({
    name: 'org.sed_ml.RemoveXML'
  });
org.sed_ml.ChangeXML = new Jsonix.Model.ClassInfo({
    name: 'org.sed_ml.ChangeXML'
  });
org.sed_ml.AddXML = new Jsonix.Model.ClassInfo({
    name: 'org.sed_ml.AddXML'
  });
org.sed_ml.ComputeChange = new Jsonix.Model.ClassInfo({
    name: 'org.sed_ml.ComputeChange'
  });
org.sed_ml.NewXML = new Jsonix.Model.ClassInfo({
    name: 'org.sed_ml.NewXML'
  });
org.sed_ml.ListOfVariables = new Jsonix.Model.ClassInfo({
    name: 'org.sed_ml.ListOfVariables'
  });
org.sed_ml.ListOfParameters = new Jsonix.Model.ClassInfo({
    name: 'org.sed_ml.ListOfParameters'
  });
org.sed_ml.Variable = new Jsonix.Model.ClassInfo({
    name: 'org.sed_ml.Variable'
  });
org.sed_ml.Parameter = new Jsonix.Model.ClassInfo({
    name: 'org.sed_ml.Parameter'
  });
org.sed_ml.Surface = new Jsonix.Model.ClassInfo({
    name: 'org.sed_ml.Surface'
  });
org.sed_ml.Plot2D = new Jsonix.Model.ClassInfo({
    name: 'org.sed_ml.Plot2D'
  });
org.sed_ml.ListOfCurves = new Jsonix.Model.ClassInfo({
    name: 'org.sed_ml.ListOfCurves'
  });
org.sed_ml.ListOfModels = new Jsonix.Model.ClassInfo({
    name: 'org.sed_ml.ListOfModels'
  });
org.sed_ml.DataSet = new Jsonix.Model.ClassInfo({
    name: 'org.sed_ml.DataSet'
  });
org.sed_ml.Algorithm = new Jsonix.Model.ClassInfo({
    name: 'org.sed_ml.Algorithm'
  });
org.sed_ml.SedML = new Jsonix.Model.ClassInfo({
    name: 'org.sed_ml.SedML'
  });
org.sed_ml.ListOfSimulations = new Jsonix.Model.ClassInfo({
    name: 'org.sed_ml.ListOfSimulations'
  });
org.sed_ml.ListOfTasks = new Jsonix.Model.ClassInfo({
    name: 'org.sed_ml.ListOfTasks'
  });
org.sed_ml.ListOfDataGenerators = new Jsonix.Model.ClassInfo({
    name: 'org.sed_ml.ListOfDataGenerators'
  });
org.sed_ml.ListOfOutputs = new Jsonix.Model.ClassInfo({
    name: 'org.sed_ml.ListOfOutputs'
  });
org.sed_ml.UniformTimeCourse = new Jsonix.Model.ClassInfo({
    name: 'org.sed_ml.UniformTimeCourse'
  });
org.sed_ml.Task = new Jsonix.Model.ClassInfo({
    name: 'org.sed_ml.Task'
  });
org.sed_ml.DataGenerator = new Jsonix.Model.ClassInfo({
    name: 'org.sed_ml.DataGenerator'
  });
org.sed_ml.Report = new Jsonix.Model.ClassInfo({
    name: 'org.sed_ml.Report'
  });
org.sed_ml.Plot3D = new Jsonix.Model.ClassInfo({
    name: 'org.sed_ml.Plot3D'
  });
org.sed_ml.ListOfSurfaces = new Jsonix.Model.ClassInfo({
    name: 'org.sed_ml.ListOfSurfaces'
  });
org.sed_ml.ListOfDataSets = new Jsonix.Model.ClassInfo({
    name: 'org.sed_ml.ListOfDataSets'
  });
{
  {
    org.sed_ml.Curve.baseTypeInfo = org.sed_ml.SEDBase;
    org.sed_ml.Curve.properties = [new Jsonix.Model.AttributePropertyInfo({
          name: 'yDataReference',
          typeInfo: Jsonix.Schema.XSD.String.INSTANCE,
          attributeName: new Jsonix.XML.QName('yDataReference')
        }), new Jsonix.Model.AttributePropertyInfo({
          name: 'xDataReference',
          typeInfo: Jsonix.Schema.XSD.String.INSTANCE,
          attributeName: new Jsonix.XML.QName('xDataReference')
        }), new Jsonix.Model.AttributePropertyInfo({
          name: 'logY',
          typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE,
          attributeName: new Jsonix.XML.QName('logY')
        }), new Jsonix.Model.AttributePropertyInfo({
          name: 'logX',
          typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE,
          attributeName: new Jsonix.XML.QName('logX')
        }), new Jsonix.Model.AttributePropertyInfo({
          name: 'id',
          typeInfo: Jsonix.Schema.XSD.String.INSTANCE,
          attributeName: new Jsonix.XML.QName('id')
        }), new Jsonix.Model.AttributePropertyInfo({
          name: 'name',
          typeInfo: Jsonix.Schema.XSD.String.INSTANCE,
          attributeName: new Jsonix.XML.QName('name')
        })];
  }
  {
    org.sed_ml.SEDBase.properties = [new Jsonix.Model.ElementPropertyInfo({
          name: 'notes',
          elementName: new Jsonix.XML.QName('http:\/\/sed-ml.org\/', 'notes'),
          typeInfo: org.sed_ml.Notes
        }), new Jsonix.Model.ElementPropertyInfo({
          name: 'annotation',
          elementName: new Jsonix.XML.QName('http:\/\/sed-ml.org\/', 'annotation'),
          typeInfo: org.sed_ml.Annotation
        }), new Jsonix.Model.AttributePropertyInfo({
          name: 'metaid',
          typeInfo: Jsonix.Schema.XSD.String.INSTANCE,
          attributeName: new Jsonix.XML.QName('metaid')
        })];
  }
  {
    org.sed_ml.Notes.properties = [new Jsonix.Model.AnyElementPropertyInfo({
          name: 'any',
          collection: true,
          domAllowed: true
        })];
  }
  {
    org.sed_ml.Annotation.properties = [new Jsonix.Model.AnyElementPropertyInfo({
          name: 'any',
          collection: true,
          domAllowed: true
        })];
  }
  {
    org.sed_ml.Model.baseTypeInfo = org.sed_ml.SEDBase;
    org.sed_ml.Model.properties = [new Jsonix.Model.ElementPropertyInfo({
          name: 'listOfChanges',
          elementName: new Jsonix.XML.QName('http:\/\/sed-ml.org\/', 'listOfChanges'),
          typeInfo: org.sed_ml.ListOfChanges
        }), new Jsonix.Model.AttributePropertyInfo({
          name: 'language',
          typeInfo: Jsonix.Schema.XSD.String.INSTANCE,
          attributeName: new Jsonix.XML.QName('language')
        }), new Jsonix.Model.AttributePropertyInfo({
          name: 'source',
          typeInfo: Jsonix.Schema.XSD.String.INSTANCE,
          attributeName: new Jsonix.XML.QName('source')
        }), new Jsonix.Model.AttributePropertyInfo({
          name: 'id',
          typeInfo: Jsonix.Schema.XSD.String.INSTANCE,
          attributeName: new Jsonix.XML.QName('id')
        }), new Jsonix.Model.AttributePropertyInfo({
          name: 'name',
          typeInfo: Jsonix.Schema.XSD.String.INSTANCE,
          attributeName: new Jsonix.XML.QName('name')
        })];
  }
  {
    org.sed_ml.ListOfChanges.baseTypeInfo = org.sed_ml.SEDBase;
    org.sed_ml.ListOfChanges.properties = [new Jsonix.Model.ElementsPropertyInfo({
          name: 'changeAttributeOrChangeXMLOrAddXML',
          collection: true,
          elementTypeInfos: [{
              elementName: new Jsonix.XML.QName('http:\/\/sed-ml.org\/', 'changeAttribute'),
              typeInfo: org.sed_ml.ChangeAttribute
            }, {
              elementName: new Jsonix.XML.QName('http:\/\/sed-ml.org\/', 'removeXML'),
              typeInfo: org.sed_ml.RemoveXML
            }, {
              elementName: new Jsonix.XML.QName('http:\/\/sed-ml.org\/', 'changeXML'),
              typeInfo: org.sed_ml.ChangeXML
            }, {
              elementName: new Jsonix.XML.QName('http:\/\/sed-ml.org\/', 'addXML'),
              typeInfo: org.sed_ml.AddXML
            }, {
              elementName: new Jsonix.XML.QName('http:\/\/sed-ml.org\/', 'computeChange'),
              typeInfo: org.sed_ml.ComputeChange
            }]
        })];
  }
  {
    org.sed_ml.ChangeAttribute.baseTypeInfo = org.sed_ml.SEDBase;
    org.sed_ml.ChangeAttribute.properties = [new Jsonix.Model.AttributePropertyInfo({
          name: 'target',
          typeInfo: Jsonix.Schema.XSD.String.INSTANCE,
          attributeName: new Jsonix.XML.QName('target')
        }), new Jsonix.Model.AttributePropertyInfo({
          name: 'newValue',
          typeInfo: Jsonix.Schema.XSD.String.INSTANCE,
          attributeName: new Jsonix.XML.QName('newValue')
        })];
  }
  {
    org.sed_ml.ChangeXML.baseTypeInfo = org.sed_ml.SEDBase;
    org.sed_ml.ChangeXML.properties = [new Jsonix.Model.ElementPropertyInfo({
          name: 'newXML',
          elementName: new Jsonix.XML.QName('http:\/\/sed-ml.org\/', 'newXML'),
          typeInfo: org.sed_ml.NewXML
        }), new Jsonix.Model.AttributePropertyInfo({
          name: 'target',
          typeInfo: Jsonix.Schema.XSD.String.INSTANCE,
          attributeName: new Jsonix.XML.QName('target')
        })];
  }
  {
    org.sed_ml.NewXML.properties = [new Jsonix.Model.AnyElementPropertyInfo({
          name: 'any',
          collection: true,
          domAllowed: true
        })];
  }
  {
    org.sed_ml.AddXML.baseTypeInfo = org.sed_ml.SEDBase;
    org.sed_ml.AddXML.properties = [new Jsonix.Model.ElementPropertyInfo({
          name: 'newXML',
          elementName: new Jsonix.XML.QName('http:\/\/sed-ml.org\/', 'newXML'),
          typeInfo: org.sed_ml.NewXML
        }), new Jsonix.Model.AttributePropertyInfo({
          name: 'target',
          typeInfo: Jsonix.Schema.XSD.String.INSTANCE,
          attributeName: new Jsonix.XML.QName('target')
        })];
  }
  {
    org.sed_ml.RemoveXML.baseTypeInfo = org.sed_ml.SEDBase;
    org.sed_ml.RemoveXML.properties = [new Jsonix.Model.AttributePropertyInfo({
          name: 'target',
          typeInfo: Jsonix.Schema.XSD.String.INSTANCE,
          attributeName: new Jsonix.XML.QName('target')
        })];
  }
  {
    org.sed_ml.ComputeChange.baseTypeInfo = org.sed_ml.SEDBase;
    org.sed_ml.ComputeChange.properties = [new Jsonix.Model.ElementPropertyInfo({
          name: 'listOfVariables',
          elementName: new Jsonix.XML.QName('http:\/\/sed-ml.org\/', 'listOfVariables'),
          typeInfo: org.sed_ml.ListOfVariables
        }), new Jsonix.Model.ElementPropertyInfo({
          name: 'listOfParameters',
          elementName: new Jsonix.XML.QName('http:\/\/sed-ml.org\/', 'listOfParameters'),
          typeInfo: org.sed_ml.ListOfParameters
        }), /*new Jsonix.Model.ElementPropertyInfo({
          name: 'math',
          elementName: new Jsonix.XML.QName('http:\/\/www.w3.org\/1998\/Math\/MathML', 'math'),
          typeInfo: org.w3._1998.math.mathml.MathType
        }), */new Jsonix.Model.AttributePropertyInfo({
          name: 'target',
          typeInfo: Jsonix.Schema.XSD.String.INSTANCE,
          attributeName: new Jsonix.XML.QName('target')
        })];
  }
  {
    org.sed_ml.ListOfVariables.baseTypeInfo = org.sed_ml.SEDBase;
    org.sed_ml.ListOfVariables.properties = [new Jsonix.Model.ElementPropertyInfo({
          name: 'variable',
          collection: true,
          elementName: new Jsonix.XML.QName('http:\/\/sed-ml.org\/', 'variable'),
          typeInfo: org.sed_ml.Variable
        })];
  }
  {
    org.sed_ml.Variable.baseTypeInfo = org.sed_ml.SEDBase;
    org.sed_ml.Variable.properties = [new Jsonix.Model.AttributePropertyInfo({
          name: 'taskReference',
          typeInfo: Jsonix.Schema.XSD.String.INSTANCE,
          attributeName: new Jsonix.XML.QName('taskReference')
        }), new Jsonix.Model.AttributePropertyInfo({
          name: 'modelReference',
          typeInfo: Jsonix.Schema.XSD.String.INSTANCE,
          attributeName: new Jsonix.XML.QName('modelReference')
        }), new Jsonix.Model.AttributePropertyInfo({
          name: 'target',
          typeInfo: Jsonix.Schema.XSD.String.INSTANCE,
          attributeName: new Jsonix.XML.QName('target')
        }), new Jsonix.Model.AttributePropertyInfo({
          name: 'symbol',
          typeInfo: Jsonix.Schema.XSD.String.INSTANCE,
          attributeName: new Jsonix.XML.QName('symbol')
        }), new Jsonix.Model.AttributePropertyInfo({
          name: 'id',
          typeInfo: Jsonix.Schema.XSD.String.INSTANCE,
          attributeName: new Jsonix.XML.QName('id')
        }), new Jsonix.Model.AttributePropertyInfo({
          name: 'name',
          typeInfo: Jsonix.Schema.XSD.String.INSTANCE,
          attributeName: new Jsonix.XML.QName('name')
        })];
  }
  {
    org.sed_ml.ListOfParameters.baseTypeInfo = org.sed_ml.SEDBase;
    org.sed_ml.ListOfParameters.properties = [new Jsonix.Model.ElementPropertyInfo({
          name: 'parameter',
          collection: true,
          elementName: new Jsonix.XML.QName('http:\/\/sed-ml.org\/', 'parameter'),
          typeInfo: org.sed_ml.Parameter
        })];
  }
  {
    org.sed_ml.Parameter.baseTypeInfo = org.sed_ml.SEDBase;
    org.sed_ml.Parameter.properties = [new Jsonix.Model.AttributePropertyInfo({
          name: 'value',
          typeInfo: Jsonix.Schema.XSD.Double.INSTANCE,
          attributeName: new Jsonix.XML.QName('value')
        }), new Jsonix.Model.AttributePropertyInfo({
          name: 'id',
          typeInfo: Jsonix.Schema.XSD.String.INSTANCE,
          attributeName: new Jsonix.XML.QName('id')
        }), new Jsonix.Model.AttributePropertyInfo({
          name: 'name',
          typeInfo: Jsonix.Schema.XSD.String.INSTANCE,
          attributeName: new Jsonix.XML.QName('name')
        })];
  }
  {
    org.sed_ml.Surface.baseTypeInfo = org.sed_ml.SEDBase;
    org.sed_ml.Surface.properties = [new Jsonix.Model.AttributePropertyInfo({
          name: 'yDataReference',
          typeInfo: Jsonix.Schema.XSD.String.INSTANCE,
          attributeName: new Jsonix.XML.QName('yDataReference')
        }), new Jsonix.Model.AttributePropertyInfo({
          name: 'xDataReference',
          typeInfo: Jsonix.Schema.XSD.String.INSTANCE,
          attributeName: new Jsonix.XML.QName('xDataReference')
        }), new Jsonix.Model.AttributePropertyInfo({
          name: 'zDataReference',
          typeInfo: Jsonix.Schema.XSD.String.INSTANCE,
          attributeName: new Jsonix.XML.QName('zDataReference')
        }), new Jsonix.Model.AttributePropertyInfo({
          name: 'logY',
          typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE,
          attributeName: new Jsonix.XML.QName('logY')
        }), new Jsonix.Model.AttributePropertyInfo({
          name: 'logX',
          typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE,
          attributeName: new Jsonix.XML.QName('logX')
        }), new Jsonix.Model.AttributePropertyInfo({
          name: 'logZ',
          typeInfo: Jsonix.Schema.XSD.Boolean.INSTANCE,
          attributeName: new Jsonix.XML.QName('logZ')
        }), new Jsonix.Model.AttributePropertyInfo({
          name: 'id',
          typeInfo: Jsonix.Schema.XSD.String.INSTANCE,
          attributeName: new Jsonix.XML.QName('id')
        }), new Jsonix.Model.AttributePropertyInfo({
          name: 'name',
          typeInfo: Jsonix.Schema.XSD.String.INSTANCE,
          attributeName: new Jsonix.XML.QName('name')
        })];
  }
  {
    org.sed_ml.Plot2D.baseTypeInfo = org.sed_ml.SEDBase;
    org.sed_ml.Plot2D.properties = [new Jsonix.Model.ElementPropertyInfo({
          name: 'listOfCurves',
          elementName: new Jsonix.XML.QName('http:\/\/sed-ml.org\/', 'listOfCurves'),
          typeInfo: org.sed_ml.ListOfCurves
        }), new Jsonix.Model.AttributePropertyInfo({
          name: 'id',
          typeInfo: Jsonix.Schema.XSD.String.INSTANCE,
          attributeName: new Jsonix.XML.QName('id')
        }), new Jsonix.Model.AttributePropertyInfo({
          name: 'name',
          typeInfo: Jsonix.Schema.XSD.String.INSTANCE,
          attributeName: new Jsonix.XML.QName('name')
        })];
  }
  {
    org.sed_ml.ListOfCurves.baseTypeInfo = org.sed_ml.SEDBase;
    org.sed_ml.ListOfCurves.properties = [new Jsonix.Model.ElementPropertyInfo({
          name: 'curve',
          collection: true,
          elementName: new Jsonix.XML.QName('http:\/\/sed-ml.org\/', 'curve'),
          typeInfo: org.sed_ml.Curve
        })];
  }
  {
    org.sed_ml.ListOfModels.baseTypeInfo = org.sed_ml.SEDBase;
    org.sed_ml.ListOfModels.properties = [new Jsonix.Model.ElementPropertyInfo({
          name: 'model',
          collection: true,
          elementName: new Jsonix.XML.QName('http:\/\/sed-ml.org\/', 'model'),
          typeInfo: org.sed_ml.Model
        })];
  }
  {
    org.sed_ml.DataSet.baseTypeInfo = org.sed_ml.SEDBase;
    org.sed_ml.DataSet.properties = [new Jsonix.Model.AttributePropertyInfo({
          name: 'dataReference',
          typeInfo: Jsonix.Schema.XSD.String.INSTANCE,
          attributeName: new Jsonix.XML.QName('dataReference')
        }), new Jsonix.Model.AttributePropertyInfo({
          name: 'label',
          typeInfo: Jsonix.Schema.XSD.String.INSTANCE,
          attributeName: new Jsonix.XML.QName('label')
        }), new Jsonix.Model.AttributePropertyInfo({
          name: 'id',
          typeInfo: Jsonix.Schema.XSD.String.INSTANCE,
          attributeName: new Jsonix.XML.QName('id')
        }), new Jsonix.Model.AttributePropertyInfo({
          name: 'name',
          typeInfo: Jsonix.Schema.XSD.String.INSTANCE,
          attributeName: new Jsonix.XML.QName('name')
        })];
  }
  {
    org.sed_ml.Algorithm.baseTypeInfo = org.sed_ml.SEDBase;
    org.sed_ml.Algorithm.properties = [new Jsonix.Model.AttributePropertyInfo({
          name: 'kisaoID',
          typeInfo: Jsonix.Schema.XSD.String.INSTANCE,
          attributeName: new Jsonix.XML.QName('kisaoID')
        })];
  }
  {
    org.sed_ml.SedML.baseTypeInfo = org.sed_ml.SEDBase;
    org.sed_ml.SedML.properties = [new Jsonix.Model.ElementPropertyInfo({
          name: 'listOfSimulations',
          elementName: new Jsonix.XML.QName('http:\/\/sed-ml.org\/', 'listOfSimulations'),
          typeInfo: org.sed_ml.ListOfSimulations
        }), new Jsonix.Model.ElementPropertyInfo({
          name: 'listOfModels',
          elementName: new Jsonix.XML.QName('http:\/\/sed-ml.org\/', 'listOfModels'),
          typeInfo: org.sed_ml.ListOfModels
        }), new Jsonix.Model.ElementPropertyInfo({
          name: 'listOfTasks',
          elementName: new Jsonix.XML.QName('http:\/\/sed-ml.org\/', 'listOfTasks'),
          typeInfo: org.sed_ml.ListOfTasks
        }), new Jsonix.Model.ElementPropertyInfo({
          name: 'listOfDataGenerators',
          elementName: new Jsonix.XML.QName('http:\/\/sed-ml.org\/', 'listOfDataGenerators'),
          typeInfo: org.sed_ml.ListOfDataGenerators
        }), new Jsonix.Model.ElementPropertyInfo({
          name: 'listOfOutputs',
          elementName: new Jsonix.XML.QName('http:\/\/sed-ml.org\/', 'listOfOutputs'),
          typeInfo: org.sed_ml.ListOfOutputs
        }), new Jsonix.Model.AttributePropertyInfo({
          name: 'level',
          typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE,
          attributeName: new Jsonix.XML.QName('level')
        }), new Jsonix.Model.AttributePropertyInfo({
          name: 'version',
          typeInfo: Jsonix.Schema.XSD.Decimal.INSTANCE,
          attributeName: new Jsonix.XML.QName('version')
        })];
  }
  {
    org.sed_ml.ListOfSimulations.baseTypeInfo = org.sed_ml.SEDBase;
    org.sed_ml.ListOfSimulations.properties = [new Jsonix.Model.ElementPropertyInfo({
          name: 'uniformTimeCourse',
          collection: true,
          elementName: new Jsonix.XML.QName('http:\/\/sed-ml.org\/', 'uniformTimeCourse'),
          typeInfo: org.sed_ml.UniformTimeCourse
        })];
  }
  {
    org.sed_ml.UniformTimeCourse.baseTypeInfo = org.sed_ml.SEDBase;
    org.sed_ml.UniformTimeCourse.properties = [new Jsonix.Model.ElementPropertyInfo({
          name: 'algorithm',
          elementName: new Jsonix.XML.QName('http:\/\/sed-ml.org\/', 'algorithm'),
          typeInfo: org.sed_ml.Algorithm
        }), new Jsonix.Model.AttributePropertyInfo({
          name: 'outputStartTime',
          typeInfo: Jsonix.Schema.XSD.Double.INSTANCE,
          attributeName: new Jsonix.XML.QName('outputStartTime')
        }), new Jsonix.Model.AttributePropertyInfo({
          name: 'outputEndTime',
          typeInfo: Jsonix.Schema.XSD.Double.INSTANCE,
          attributeName: new Jsonix.XML.QName('outputEndTime')
        }), new Jsonix.Model.AttributePropertyInfo({
          name: 'numberOfPoints',
          typeInfo: Jsonix.Schema.XSD.Integer.INSTANCE,
          attributeName: new Jsonix.XML.QName('numberOfPoints')
        }), new Jsonix.Model.AttributePropertyInfo({
          name: 'initialTime',
          typeInfo: Jsonix.Schema.XSD.Double.INSTANCE,
          attributeName: new Jsonix.XML.QName('initialTime')
        }), new Jsonix.Model.AttributePropertyInfo({
          name: 'id',
          typeInfo: Jsonix.Schema.XSD.String.INSTANCE,
          attributeName: new Jsonix.XML.QName('id')
        }), new Jsonix.Model.AttributePropertyInfo({
          name: 'name',
          typeInfo: Jsonix.Schema.XSD.String.INSTANCE,
          attributeName: new Jsonix.XML.QName('name')
        })];
  }
  {
    org.sed_ml.ListOfTasks.baseTypeInfo = org.sed_ml.SEDBase;
    org.sed_ml.ListOfTasks.properties = [new Jsonix.Model.ElementPropertyInfo({
          name: 'task',
          collection: true,
          elementName: new Jsonix.XML.QName('http:\/\/sed-ml.org\/', 'task'),
          typeInfo: org.sed_ml.Task
        })];
  }
  {
    org.sed_ml.Task.baseTypeInfo = org.sed_ml.SEDBase;
    org.sed_ml.Task.properties = [new Jsonix.Model.AttributePropertyInfo({
          name: 'simulationReference',
          typeInfo: Jsonix.Schema.XSD.String.INSTANCE,
          attributeName: new Jsonix.XML.QName('simulationReference')
        }), new Jsonix.Model.AttributePropertyInfo({
          name: 'modelReference',
          typeInfo: Jsonix.Schema.XSD.String.INSTANCE,
          attributeName: new Jsonix.XML.QName('modelReference')
        }), new Jsonix.Model.AttributePropertyInfo({
          name: 'id',
          typeInfo: Jsonix.Schema.XSD.String.INSTANCE,
          attributeName: new Jsonix.XML.QName('id')
        }), new Jsonix.Model.AttributePropertyInfo({
          name: 'name',
          typeInfo: Jsonix.Schema.XSD.String.INSTANCE,
          attributeName: new Jsonix.XML.QName('name')
        })];
  }
  {
    org.sed_ml.ListOfDataGenerators.baseTypeInfo = org.sed_ml.SEDBase;
    org.sed_ml.ListOfDataGenerators.properties = [new Jsonix.Model.ElementPropertyInfo({
          name: 'dataGenerator',
          collection: true,
          elementName: new Jsonix.XML.QName('http:\/\/sed-ml.org\/', 'dataGenerator'),
          typeInfo: org.sed_ml.DataGenerator
        })];
  }
  {
    org.sed_ml.DataGenerator.baseTypeInfo = org.sed_ml.SEDBase;
    org.sed_ml.DataGenerator.properties = [new Jsonix.Model.ElementPropertyInfo({
          name: 'listOfVariables',
          elementName: new Jsonix.XML.QName('http:\/\/sed-ml.org\/', 'listOfVariables'),
          typeInfo: org.sed_ml.ListOfVariables
        }), new Jsonix.Model.ElementPropertyInfo({
          name: 'listOfParameters',
          elementName: new Jsonix.XML.QName('http:\/\/sed-ml.org\/', 'listOfParameters'),
          typeInfo: org.sed_ml.ListOfParameters
        }), /*new Jsonix.Model.ElementPropertyInfo({
          name: 'math',
          elementName: new Jsonix.XML.QName('http:\/\/www.w3.org\/1998\/Math\/MathML', 'math'),
          typeInfo: org.w3._1998.math.mathml.MathType
        }), */new Jsonix.Model.AttributePropertyInfo({
          name: 'id',
          typeInfo: Jsonix.Schema.XSD.String.INSTANCE,
          attributeName: new Jsonix.XML.QName('id')
        }), new Jsonix.Model.AttributePropertyInfo({
          name: 'name',
          typeInfo: Jsonix.Schema.XSD.String.INSTANCE,
          attributeName: new Jsonix.XML.QName('name')
        })];
  }
  {
    org.sed_ml.ListOfOutputs.baseTypeInfo = org.sed_ml.SEDBase;
    org.sed_ml.ListOfOutputs.properties = [new Jsonix.Model.ElementsPropertyInfo({
          name: 'plot2DOrPlot3DOrReport',
          collection: true,
          elementTypeInfos: [{
              elementName: new Jsonix.XML.QName('http:\/\/sed-ml.org\/', 'report'),
              typeInfo: org.sed_ml.Report
            }, {
              elementName: new Jsonix.XML.QName('http:\/\/sed-ml.org\/', 'plot2D'),
              typeInfo: org.sed_ml.Plot2D
            }, {
              elementName: new Jsonix.XML.QName('http:\/\/sed-ml.org\/', 'plot3D'),
              typeInfo: org.sed_ml.Plot3D
            }]
        })];
  }
  {
    org.sed_ml.Plot3D.baseTypeInfo = org.sed_ml.SEDBase;
    org.sed_ml.Plot3D.properties = [new Jsonix.Model.ElementPropertyInfo({
          name: 'listOfSurfaces',
          elementName: new Jsonix.XML.QName('http:\/\/sed-ml.org\/', 'listOfSurfaces'),
          typeInfo: org.sed_ml.ListOfSurfaces
        }), new Jsonix.Model.AttributePropertyInfo({
          name: 'id',
          typeInfo: Jsonix.Schema.XSD.String.INSTANCE,
          attributeName: new Jsonix.XML.QName('id')
        }), new Jsonix.Model.AttributePropertyInfo({
          name: 'name',
          typeInfo: Jsonix.Schema.XSD.String.INSTANCE,
          attributeName: new Jsonix.XML.QName('name')
        })];
  }
  {
    org.sed_ml.ListOfSurfaces.baseTypeInfo = org.sed_ml.SEDBase;
    org.sed_ml.ListOfSurfaces.properties = [new Jsonix.Model.ElementPropertyInfo({
          name: 'surface',
          collection: true,
          elementName: new Jsonix.XML.QName('http:\/\/sed-ml.org\/', 'surface'),
          typeInfo: org.sed_ml.Surface
        })];
  }
  {
    org.sed_ml.Report.baseTypeInfo = org.sed_ml.SEDBase;
    org.sed_ml.Report.properties = [new Jsonix.Model.ElementPropertyInfo({
          name: 'listOfDataSets',
          elementName: new Jsonix.XML.QName('http:\/\/sed-ml.org\/', 'listOfDataSets'),
          typeInfo: org.sed_ml.ListOfDataSets
        }), new Jsonix.Model.AttributePropertyInfo({
          name: 'id',
          typeInfo: Jsonix.Schema.XSD.String.INSTANCE,
          attributeName: new Jsonix.XML.QName('id')
        }), new Jsonix.Model.AttributePropertyInfo({
          name: 'name',
          typeInfo: Jsonix.Schema.XSD.String.INSTANCE,
          attributeName: new Jsonix.XML.QName('name')
        })];
  }
  {
    org.sed_ml.ListOfDataSets.baseTypeInfo = org.sed_ml.SEDBase;
    org.sed_ml.ListOfDataSets.properties = [new Jsonix.Model.ElementPropertyInfo({
          name: 'dataSet',
          collection: true,
          elementName: new Jsonix.XML.QName('http:\/\/sed-ml.org\/', 'dataSet'),
          typeInfo: org.sed_ml.DataSet
        })];
  }
}
org.sed_ml.Mappings.elementInfos = [{
    elementName: new Jsonix.XML.QName('http:\/\/sed-ml.org\/', 'curve'),
    typeInfo: org.sed_ml.Curve
  }, {
    elementName: new Jsonix.XML.QName('http:\/\/sed-ml.org\/', 'notes'),
    typeInfo: org.sed_ml.Notes
  }, {
    elementName: new Jsonix.XML.QName('http:\/\/sed-ml.org\/', 'annotation'),
    typeInfo: org.sed_ml.Annotation
  }, {
    elementName: new Jsonix.XML.QName('http:\/\/sed-ml.org\/', 'model'),
    typeInfo: org.sed_ml.Model
  }, {
    elementName: new Jsonix.XML.QName('http:\/\/sed-ml.org\/', 'listOfChanges'),
    typeInfo: org.sed_ml.ListOfChanges
  }, {
    elementName: new Jsonix.XML.QName('http:\/\/sed-ml.org\/', 'changeAttribute'),
    typeInfo: org.sed_ml.ChangeAttribute
  }, {
    elementName: new Jsonix.XML.QName('http:\/\/sed-ml.org\/', 'changeXML'),
    typeInfo: org.sed_ml.ChangeXML
  }, {
    elementName: new Jsonix.XML.QName('http:\/\/sed-ml.org\/', 'newXML'),
    typeInfo: org.sed_ml.NewXML
  }, {
    elementName: new Jsonix.XML.QName('http:\/\/sed-ml.org\/', 'addXML'),
    typeInfo: org.sed_ml.AddXML
  }, {
    elementName: new Jsonix.XML.QName('http:\/\/sed-ml.org\/', 'removeXML'),
    typeInfo: org.sed_ml.RemoveXML
  }, {
    elementName: new Jsonix.XML.QName('http:\/\/sed-ml.org\/', 'computeChange'),
    typeInfo: org.sed_ml.ComputeChange
  }, {
    elementName: new Jsonix.XML.QName('http:\/\/sed-ml.org\/', 'listOfVariables'),
    typeInfo: org.sed_ml.ListOfVariables
  }, {
    elementName: new Jsonix.XML.QName('http:\/\/sed-ml.org\/', 'variable'),
    typeInfo: org.sed_ml.Variable
  }, {
    elementName: new Jsonix.XML.QName('http:\/\/sed-ml.org\/', 'listOfParameters'),
    typeInfo: org.sed_ml.ListOfParameters
  }, {
    elementName: new Jsonix.XML.QName('http:\/\/sed-ml.org\/', 'parameter'),
    typeInfo: org.sed_ml.Parameter
  }, {
    elementName: new Jsonix.XML.QName('http:\/\/sed-ml.org\/', 'surface'),
    typeInfo: org.sed_ml.Surface
  }, {
    elementName: new Jsonix.XML.QName('http:\/\/sed-ml.org\/', 'plot2D'),
    typeInfo: org.sed_ml.Plot2D
  }, {
    elementName: new Jsonix.XML.QName('http:\/\/sed-ml.org\/', 'listOfCurves'),
    typeInfo: org.sed_ml.ListOfCurves
  }, {
    elementName: new Jsonix.XML.QName('http:\/\/sed-ml.org\/', 'listOfModels'),
    typeInfo: org.sed_ml.ListOfModels
  }, {
    elementName: new Jsonix.XML.QName('http:\/\/sed-ml.org\/', 'dataSet'),
    typeInfo: org.sed_ml.DataSet
  }, {
    elementName: new Jsonix.XML.QName('http:\/\/sed-ml.org\/', 'algorithm'),
    typeInfo: org.sed_ml.Algorithm
  }, {
    elementName: new Jsonix.XML.QName('http:\/\/sed-ml.org\/', 'sedML'),
    typeInfo: org.sed_ml.SedML
  }, {
    elementName: new Jsonix.XML.QName('http:\/\/sed-ml.org\/', 'listOfSimulations'),
    typeInfo: org.sed_ml.ListOfSimulations
  }, {
    elementName: new Jsonix.XML.QName('http:\/\/sed-ml.org\/', 'uniformTimeCourse'),
    typeInfo: org.sed_ml.UniformTimeCourse
  }, {
    elementName: new Jsonix.XML.QName('http:\/\/sed-ml.org\/', 'listOfTasks'),
    typeInfo: org.sed_ml.ListOfTasks
  }, {
    elementName: new Jsonix.XML.QName('http:\/\/sed-ml.org\/', 'task'),
    typeInfo: org.sed_ml.Task
  }, {
    elementName: new Jsonix.XML.QName('http:\/\/sed-ml.org\/', 'listOfDataGenerators'),
    typeInfo: org.sed_ml.ListOfDataGenerators
  }, {
    elementName: new Jsonix.XML.QName('http:\/\/sed-ml.org\/', 'dataGenerator'),
    typeInfo: org.sed_ml.DataGenerator
  }, {
    elementName: new Jsonix.XML.QName('http:\/\/sed-ml.org\/', 'listOfOutputs'),
    typeInfo: org.sed_ml.ListOfOutputs
  }, {
    elementName: new Jsonix.XML.QName('http:\/\/sed-ml.org\/', 'plot3D'),
    typeInfo: org.sed_ml.Plot3D
  }, {
    elementName: new Jsonix.XML.QName('http:\/\/sed-ml.org\/', 'listOfSurfaces'),
    typeInfo: org.sed_ml.ListOfSurfaces
  }, {
    elementName: new Jsonix.XML.QName('http:\/\/sed-ml.org\/', 'report'),
    typeInfo: org.sed_ml.Report
  }, {
    elementName: new Jsonix.XML.QName('http:\/\/sed-ml.org\/', 'listOfDataSets'),
    typeInfo: org.sed_ml.ListOfDataSets
  }];