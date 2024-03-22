import numpy as np
import pandas as pd
import seaborn as sns
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score
from transformers import DistilBertForSequenceClassification, DistilBertTokenizer
from torch.utils.data import DataLoader, Dataset

import torch
import matplotlib.pyplot as plt

#Check if CUDA ia available otherwise use CPU(My macbook m2 chip pro has CPU
device = torch.device("cuda" if torch.device.cuda.is_available() else "cpu")
